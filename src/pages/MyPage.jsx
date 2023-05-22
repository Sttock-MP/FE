import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Mypage() {
  // yup.object를 통해 스키마를 만들어서 검증로직 및 에러메세지
  const formSchema = yup.object({
    name: yup.string().required('이름을 입력해주세요'),
    id: yup.string().required('아이디를 입력해주세요'),
    phone: yup.string().required('전화번호를 입력해주세요'),
    email: yup.string().email('이메일 형식에 맞지 않습니다.').required('이메일을 입력해주세요'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요')
      .min(8, '비밀번호는 8자 이상이어야 합니다.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    //회원가입 view
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="이름" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <input name="phone" type="number" placeholder="전화번호" {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
        <input name="id" placeholder="아이디" {...register('id')} />
        {errors.id && <p>{errors.id.message}</p>}
        <input name="email" placeholder="이메일" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="password" name="password" placeholder="비밀번호" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <input type="submit" />
      </form>
    </div>
  )
}
