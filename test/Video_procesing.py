#Imports

from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
import requests
import re
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
from random import randint


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

    #4 Main types of links to handle: Streamable, Vimeo, Youtube, Twitter

    options = webdriver.ChromeOptions()
    prefs = {"download.default_directory" : "C:\pvid_stream_vids"}
    driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
    options.add_experimental_option("prefs", prefs);

    if re.search("twitter.com", url):
        converter = 'https://ssstwitter.com/'
        driver.get(converter)
        driver.maximize_window()

        search_input = driver.find_element(By.CLASS_NAME, "form-control")
        search_input.send_keys(url)
        time.sleep(5)
        search_input.send_keys(Keys.ENTER)
        time.sleep(5)

        download_url = driver.find_element(By.CSS_SELECTOR, ".pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark.vignette_active").get_attribute("href")
        time.sleep(3)
        driver.close()

        file_to_save = "vid"
        file_to_save = file_to_save + str(randomize()) + ".mp4"

        resp = requests.get(download_url)
        with open(file_to_save, "wb") as f:
            f.write(resp.content)

    elif re.search("vimeo.com", url):
        converter = 'https://vimeo-downloader.com/'
        driver.get(converter)
        driver.maximize_window()

        search_input = driver.find_element(By.CLASS_NAME,"form-control")
        search_input.send_keys(url)
        time.sleep(5)
        search_input.send_keys(Keys.ENTER)
        time.sleep(5)

        download_url = driver.find_element(By.CSS_SELECTOR, ".btn.btn-danger.btn-lg.py-3.my-3.mx-1.d-inline-block.d-lg-block").get_attribute("href")
        time.sleep(3)
        driver.close()

        file_to_save = "vid"
        file_to_save = file_to_save + str(randomize()) + ".mp4"

        resp = requests.get(download_url)
        with open(file_to_save, "wb") as f:
            f.write(resp.content)

    elif re.search("streamable", url):
        converter = 'https://streamabledl.com/'
        driver.get(converter)
        driver.maximize_window()

        search_input = driver.find_element(By.CLASS_NAME, "uk-input")
        search_input.send_keys(url)
        time.sleep(5)
        search_input.send_keys(Keys.ENTER)
        time.sleep(5)

        download_button = driver.find_element(By.CSS_SELECTOR, ".uk-button.uk-button-large")
        download_button.click()

        # allow for download to finish in 1 min or auto exit.
        time.sleep(60)
        driver.close()


    elif re.search("youtube", url):
        converter = 'https://wave.video/convert/youtube-to-mp4'
        driver.get(converter)
        driver.maximize_window()

        search_input = driver.find_element(By.CSS_SELECTOR, ".sc-8b4b6g-0.beiuBq")
        search_input.send_keys(url)
        time.sleep(5)
        search_input.send_keys(Keys.ENTER)
        time.sleep(5)

        download_button = driver.find_element(By.CSS_SELECTOR, ".b0kwwh-0.dkrhAU.uxhyop-2.TPBMx")
        download_button.click()

        time.sleep(60)
        driver.close()


    else:
        return "The following URL cannot be converted or may not have existing support to allow for conversion"


    return True


def randomize():
    range_start = 10 ** (0)
    range_end = (10 ** 5) - 1
    return randint(range_start, range_end)


#def error_handler(url, submissionID):

#print(process_Entry('https://vimeo.com/735201', 1))
#print(process_Entry('https://twitter.com/i/status/1617131075506946050', 2))
#print(process_Entry('https://streamable.com/hv0o8i', 3))
print(process_Entry('https://www.youtube.com/watch?v=6Wlng1gEFuI', 4))

