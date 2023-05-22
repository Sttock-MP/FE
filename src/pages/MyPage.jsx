import { useForm } from 'react-hook-form'

export default function Mypage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="이름" {...register('name')} />
        <input name="email" placeholder="이메일" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: { value: 8, message: '비밀번호는 8자 이상이어야 합니다.' },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm')}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
