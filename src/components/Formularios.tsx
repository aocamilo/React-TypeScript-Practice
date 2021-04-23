import { useForm } from '../hooks/useForm';

export const Formularios = () => {
  const { form, email, password, onChange } = useForm({
    email: 'test@test.com',
    password: '123456',
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type='text'
        className='form-control'
        placeholder='email'
        name='email'
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        type='text'
        className='form-control mt-2 mb-2'
        placeholder='Password'
        name='password'
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
