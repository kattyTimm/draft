export const requiredField = value => {
   if(value) return undefined;
	else return 'Field is required!';
}

export const minLength = length => value => {
   if(value && value.length < length) return `Min length ${length} symbols`;
   else return undefined;
}

export const maxLenght = lenght => value => {
	if(value && value.length > lenght) return `Max lenght is ${lenght} symbols`;
	else return undefined;
};
