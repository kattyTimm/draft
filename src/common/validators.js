export const requiredField = value => {
   if(value) return undefined;
	else return 'Field is required!';
}

export const minLength = length => value => {
   if(value && value.length < length) return `Min length ${length} symbols`;
   else return undefined;
}
