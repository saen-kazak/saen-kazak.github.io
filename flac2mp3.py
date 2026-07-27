import os
import subprocess

def checkffmpeg():
    try:
        subprocess.run(["ffmpeg", "-version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        return True
    except subprocess.CalledProcessError:
        return False

def flactomp3(source, target):
    cmd = ["ffmpeg", "-i", source, "-ab", "320k", target]
    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def main():
    if not checkffmpeg():
        print("No ffmpeg")
        return

    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith(".flac"):
                full_path = os.path.join(root, file)
                target_path = os.path.join(root, os.path.splitext(file)[0] + ".mp3")
                print(f"Converting {full_path} to {target_path}")
                flactomp3(full_path, target_path)
                print("ok")

if __name__ == "__main__":
    main()
