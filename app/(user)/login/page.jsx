import Link from 'next/link';
import TextField from '$components/form/TextField';

const Login = () => {
	return (
		<form
			action=''
			className='mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl'
		>
			<p className='text-lg font-medium'>Sign in to your account</p>
			<TextField
				title='Email'
				type='email'
				placeholder='Enter your email'
			/>
			<TextField
				title='Password'
				type='password'
				placeholder='Enter your password'
			/>
			<button
				type='submit'
				className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
			>
				Sign in
			</button>
			<p className='text-center text-sm text-gray-500'>
				No account?{' '}
				<Link className='underline' href='/register'>
					Sign up
				</Link>
			</p>
		</form>
	);
};

export default Login;
