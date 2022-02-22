#!/bin/bash

echo "minifying js"
rm -rf $(pwd)/public/scripts/min/*

#uglify all files in the script dir
for entry in $(pwd)/public/scripts/*.js
do
    newName=$(basename $entry | sed 's/.js/.min.js/')
    rm -f $temp
    echo "Minifying $(basename $entry) to $newName"
    uglifyjs $entry --compress --mangle --output $(pwd)/public/scripts/min/$newName
done


#replace imports to the new minified
for entry in $(pwd)/public/scripts/*.js
    do
        name="$(basename $entry | sed "s/.js/.min.js/")"
        for item in $(pwd)/public/scripts/min/*.js
        do
            sed -i.bak "s/$(basename $entry)/$name/" $item
            rm -f $item.bak
    done
done

echo minified
