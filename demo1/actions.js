	//描述动作类型的常量
export const ADD_COUNT='ADD_COUNT';
export const MINUS_COUNT='MINUS_COUNT';
export const CHANGE_NAME='CHANGE_NAME';
	//actions
	//加动作
export function addCount(count){
	return {
		type:ADD_COUNT,
		count: count
	}
}
	//减动作
export function minusCount(count){
	return {
		type:MINUS_COUNT,
		count:count
	}
}

export function changeName(name){
	return {
		type:CHANGE_NAME,
		name:name
	}
}