# Pure js project
Just a fun project where I play around with the Mozilla SpiderMonkey JS engine

https://hg.mozilla.org/mozilla-central

NOTE: The JS binary is built from the Mozilla source (SpiderMonkey)

# Build commands
```bash
hg clone https://hg.mozilla.org/mozilla-central
cd mozilla-central
./mach bootstrap
# If you want optimized build you can change the mozconfig file
./mach build
```

## Optimized mozconfig
```
# Build only the SpiderMonkey JS test shell
ac_add_options --enable-project=js

# Enable optimization for speed
ac_add_options --enable-optimize

# Disable debug checks to better match a release build of Firefox
ac_add_options --disable-debug

# Use a separate objdir for optimized builds to allow easy
# switching between optimized and debug builds while developing
mk_add_options MOZ_OBJDIR=@TOPSRCDIR@/obj-opt-@CONFIG_GUESS@

# Multi core build
mk_add_options MOZ_PARALLEL_BUILD=4

# Minimal build options
ac_add_options --disable-debug-symbols
ac_add_options --disable-jit
ac_add_options --disable-tests
ac_add_options --disable-fuzzing
ac_add_options --enable-release
```

# Run 
```bash
./js main.js
```