import clean_images, add_dg_publish, filename_check, update_song_metadata, add_weblink_body

def main():
    clean_images.main()
    add_dg_publish.main()
    update_song_metadata.main()
    add_weblink_body.main()
    filename_check.main()
    

if __name__ == "__main__":
    main()
