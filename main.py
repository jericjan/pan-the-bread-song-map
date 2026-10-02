import clean_images, add_dg_publish, filename_check, update_song_metadata

def main():
    clean_images.main()
    add_dg_publish.main()
    update_song_metadata.main()
    filename_check.main()
    

if __name__ == "__main__":
    main()
