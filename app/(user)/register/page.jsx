import Link from 'next/link';
import TextField from '$components/form/TextField';

const Register = () => {
	return (
		<form
			action=''
			className='mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl'
		>
			<p className='text-lg font-medium'>Create an Account</p>
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
			<TextField
				title='Comfirm Password'
				type='password'
				placeholder='Confirm your password'
			/>
			<button
				type='submit'
				className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
			>
				Create an Account
			</button>
			<p className='text-center text-sm text-gray-500'>
				Already have an account?{' '}
				<Link className='underline' href='/login'>
					Sign in
				</Link>
			</p>
		</form>
	);
};

export default Register;
