import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

const User = mongoose.model('users', userSchema);

export default User;
