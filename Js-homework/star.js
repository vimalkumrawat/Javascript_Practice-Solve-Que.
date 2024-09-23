// var n = 6

for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6 - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= 1 * i - 1; j++) {

        process.stdout.write("* ")
    }

    process.stdout.write("\n")
}
for (let i = 6 - 1; i >= 1; i--) {
    for (let j = 1; j <= 6 - i; j++) {

        process.stdout.write(" ")
    }
    for (let j = 1; j <= 1 * i - 1; j++) {
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}