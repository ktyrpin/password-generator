const button = document.querySelector('button');
const passwordDisplay = document.querySelector('.passwordDisplay');

const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const specialCharacters = "!@#$%^&*()_+{}|:<>?-=[];',./";

const passwordSpec = {
	alphanumeric: alphanumeric,
	specialCharacters: specialCharacters,
	characters: alphanumeric + specialCharacters,
	passwordLength: 8,
};

const generatePassword = () => {
	let password = '';
	characters = passwordSpec.characters;

	for (let i = 0; i < passwordSpec.passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
	passwordDisplay.textContent = password;
};

button.addEventListener('click', generatePassword);
