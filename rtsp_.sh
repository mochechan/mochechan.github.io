#!/bin/bash

rm -rfv /tmp/xx-*.mp4

ffmpeg -y -i rtsp://192.168.1.113:554/11 -vcodec copy -map 0 -f segment -segment_time 300 -force_key_frames '"expr:eq(mod(n,30),0)"' -crf 18  -flags +global_header -segment_format mp4 -segment_format_options movflags=+faststart  "/tmp/xx-%09d.mp4"


