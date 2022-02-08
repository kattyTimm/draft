export const requiredField = value => {
   if(value) return undefined;
	else return 'Обязательное поле';
}

export const minLength = length => value => {
   if(value && value.length < length) return `Минимум ${length} символа`;
   else return undefined;
}

export const maxLenght = lenght => value => {
	if(value && value.length > lenght) return `Максимум ${lenght} символа`;
	else return undefined;
};
