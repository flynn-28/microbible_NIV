# MicroBible NIV
more translations upon request

Dependancies:
1. bz2: [https://github.com/SheetJS/bz2](https://github.com/SheetJS/bz2)

NIV Bible available at [https://biblestep.top](https://biblestep.top)

Repo structure: <br>
src/: <br>
a dir containing the full code for everything, written out for easily reading <br>
build/: <br>
a dir containing the final code, under 1mb, difficult to read <br>

testing size:<br>
Measure folder with: ``du -sk --apparent-size build``<br>
Command returns:
```bash
915     build
```
Meaning the build folder is 915 Kilobytes. 

1 Megabyte (mb) = 1000 Kilobytes (kb). Meaning the final project is 0.915 megabyte.

Hosting:
you can host this page by doing th following
1. ``git clone https://github.com/flynn-28/microbible_NIV.git``
2. ``cd microbible_NIV``
3. ``cd build``
4. ``python -m http.server``
