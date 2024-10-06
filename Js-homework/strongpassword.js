// # Wap to check that password is strong or weak, for strong password length should be above 5 and contains are uppercase, lowercase and number ?

let password = 'Vimal2024';

let uppercase = false;
let lowercase = false;
let number = false;
let spec = false

if (password.length > 5) {

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            uppercase = true;
        }
        else if (char >= 'a' && char <= 'z') {
            lowercase = true;
        }
        else if (char >= '0' && char <= '9') {
            number = true;
        }
          
    }

    if (uppercase && lowercase && number) {
        console.log('Strong: Your password is strong!');
    } else {
        console.log('Weak: Password must contain at least one uppercase, one lowercase, one number');
    }
} else {
    console.log('Weak: Password must be longer than 5 characters.');
}