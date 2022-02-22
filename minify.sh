#!/bin/bash

#minify/uglify your javascript and replace imports with minified variants.
#REQUIRES uglify-js
#Made by Neo Lejondahl

function main () {
    #paths
    scriptDir=$(pwd)/public/scripts/*.js
    minifiedDir=$(pwd)/public/scripts/min/

    rm -rf $minifiedDir*

    #uglify all files in the script dir
    for entry in $scriptDir
    do
        newName=$(basename $entry | sed 's/.js/.min.js/')
        rm -f $temp
        echo "Minifying $(basename $entry) to $newName"
        uglifyjs $entry --compress --mangle --output $minifiedDir/$newName
    done


    #replace imports to the new minified
    for entry in $scriptDir
        do
            name="$(basename $entry | sed "s/.js/.min.js/")"
            for item in $minifiedDir*.js
            do
                sed -i.bak "s/$(basename $entry)/$name/" $item
                rm -f $item.bak
        done
    done

}



echo "Minified in:"
time main
