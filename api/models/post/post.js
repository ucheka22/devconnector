import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
	//I want posts collection to reference the users collection by userId
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	text: {
		type: String,
		required: true
	},
	name: {
		type: String
	},
	avatar: {
		type: String
	},
	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			},
			text: {
				type: String,
				required: true
			},
			name: {
				type: String
			},
			avatar: {
				type: String
			},
			date: {
				type: Date,
				default: Date.now()
			}
		}
	],
	date: {
		type: Date,
		default: Date.now()
	}
});

const Post = mongoose.model('posts', postSchema);

export default Post;
