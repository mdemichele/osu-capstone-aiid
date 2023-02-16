# Imports
import os
import requests
import re
import time
from random import randint
from moviepy.editor import VideoFileClip


from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

chromeOptions = webdriver.ChromeOptions()
prefs = {"download.default_directory": r"C:\pvid_stream_vids"}
chromeOptions.add_experimental_option("prefs", prefs)
driver = webdriver.Chrome(ChromeDriverManager().install(), options=chromeOptions)

global randomized_vid
randomized_vid = {}

def process_Entry(target_url, target_submissionID):

    url = target_url
    submissionID = target_submissionID

    table = {}
    table[submissionID] = "Placeholder"

    if validate_url(url) == True:
        print(f"Video with url: {url} was successfully verified")

        if convert_video(url) == True:
            print("Finished")
        else:
            table[submissionID] = convert_video(url)

    else:
        # Update mock s3 bucket with failure condition
        table[submissionID] = validate_url(url)

def validate_url(url):

    url.strip()

    try:
        get = requests.get(url)
        if get.status_code == 200:
            return True
        else:
            return f"{url}: is not Reachable with status_code: {get.status_code}"

    except requests.exceptions.RequestException as e:
        return f"{url}: is Not reachable \nErr: {e}"


def convert_video(url):

    # 4 Main types of links to handle: Streamable, Vimeo, Youtube, Twitter

    if re.search("twitter.com", url):
        converter = 'https://ssstwitter.com/'
        search_input = "form-control"
        download_button = ".pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark.vignette_active"
        yt_flag = 0
        href_flag = 1
        close_sleep_time = 3

        process_video(url, converter, search_input, download_button, yt_flag, href_flag, close_sleep_time)
        check_requirements()


    elif re.search("vimeo.com", url):
        converter = 'https://vimeo-downloader.com/'
        search_input = "form-control"
        download_button = ".btn.btn-danger.btn-lg.py-3.my-3.mx-1.d-inline-block.d-lg-block"
        yt_flag = 0
        href_flag = 1
        close_sleep_time = 3

        process_video(url, converter, search_input, download_button, yt_flag, href_flag, close_sleep_time)
        check_requirements()

    elif re.search("streamable", url):
        converter = 'https://streamabledl.com/'
        search_input = "uk-input"
        download_button = ".uk-button.uk-button-large"
        yt_flag = 0
        href_flag = 0
        close_sleep_time = 15

        process_video(url, converter, search_input, download_button, yt_flag, href_flag, close_sleep_time)
        check_requirements()


    elif re.search("youtube", url):
        converter = 'https://wave.video/convert/youtube-to-mp4'
        search_input = '.sc-8b4b6g-0.beiuBq'
        download_button = ".b0kwwh-0.dkrhAU.uxhyop-2.TPBMx"
        yt_flag = 1
        href_flag = 0
        close_sleep_time = 15

        process_video(url, converter, search_input, download_button, yt_flag, href_flag, close_sleep_time)
        check_requirements()

    else:
        return "The following URL cannot be converted or may not have existing support to allow for conversion"

    return True

def process_video(url, converter, search_input, download_button, yt_flag, href_flag, close_sleep_time):
    driver.get(converter)
    driver.maximize_window()

    if yt_flag == 1:
        search_input = driver.find_element(By.CSS_SELECTOR, search_input)

    else:
        search_input = driver.find_element(By.CLASS_NAME, search_input)

    search_input.send_keys(url)
    time.sleep(5)
    search_input.send_keys(Keys.ENTER)
    time.sleep(5)

    if href_flag == 1:
        download_url = driver.find_element(By.CSS_SELECTOR, download_button).get_attribute("href")
        time.sleep(close_sleep_time)
        driver.close()
        append_and_convert(download_url)

    else:
        download_button = driver.find_element(By.CSS_SELECTOR, download_button)
        download_button.click()
        time.sleep(close_sleep_time)
        driver.close()

def append_and_convert(donwload_url):
    file_to_save = "vid"
    file_to_save = file_to_save + str(randomize()) + ".mp4"

    resp = requests.get(donwload_url)
    os.chdir(r"C:\pvid_stream_vids")
    with open(file_to_save, "wb") as f:
        f.write(resp.content)
        f.close()


def check_requirements():
    os.chdir(r"C:\pvid_stream_vids")
    list_of_files = os.listdir()
    latest_file = max(list_of_files, key=os.path.getctime)

    # Video size is greater than 250MB (250000000 bytes)
    if os.path.getsize(latest_file) > 250000000:
        os.remove(latest_file)
        print("The current file size (", os.path.getsize(latest_file), ") is greater than 250MB  and cannot be processed.")
        return

    clip = VideoFileClip(latest_file)
    duration = clip.duration
    clip.close()

    # Duration must be less than 2 mins and 30 seconds

    if duration > 150:
        os.remove(latest_file)
        print("The current video duration (", duration, ") is greater than 150 seconds and cannot be processed.")
        return

    print("Your video", latest_file, "has been successfully verified!")


def randomize():
    while True:
        range_start = 10 ** 0
        range_end = (10 ** 5) - 1
        temp = randint(range_start, range_end)
        global randomized_vid
        if temp not in randomized_vid:
            randomized_vid[temp] = 1
            return temp
        else:
            continue

# def error_handler(url, submissionID):


# Test Cases

# print(process_Entry('https://vimeo.com/735201', 1))
# print(process_Entry('https://twitter.com/i/status/1617131075506946050', 2))
# print(process_Entry('https://streamable.com/hv0o8i', 3))
print(process_Entry('https://www.youtube.com/watch?v=6Wlng1gEFuI', 4))
