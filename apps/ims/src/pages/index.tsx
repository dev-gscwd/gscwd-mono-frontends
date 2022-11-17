import { Button, listRenderer, Modal, PasswordField, Select, TextField, useSelect } from '@frontends/ui';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { ListState } from 'libs/ui/src/components/Select/SelectItem';

type Login = {
  email: string;
  password: string;
  gender: string;
};

const schema = yup.object().shape({
  email: yup.string().email('This field must be a valid email').required('Email address is not provided'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(30, 'Password must be at most 30 characters')
    .required('Password is not provided'),
});

type Gender = { type: string };

export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: yupResolver(schema) });

  const [credentials, setCredentials] = useState({} as Login);

  const [genders] = useState<Gender[]>([{ type: 'Male' }, { type: 'Female' }]);

  const login: SubmitHandler<Login> = ({ email, password, gender }) => {
    console.log({ email, password, gender });
    //console.log({ ...credentials, email, password, gender });
  };

  const { listDef } = useSelect<Gender>({
    key: 'type',
    render: (item, state) => listRenderer.simple(item.type, state),
  });

  //useEffect(() => console.log(credentials), [credentials]);

  return (
    <>
      <div className="flex justify-center pt-40 gap-3 px-20 py-3">
        <form onSubmit={handleSubmit(login)}>
          <div className={`w-96 mx-auto ${errors.email || errors.password ? 'space-y-4' : 'space-y-1'}`}>
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field: { ref, onChange } }) => (
                  <TextField
                    ref={ref}
                    inputType="text"
                    onChange={onChange}
                    placeholder="Email Address"
                    className="w-full"
                    variant={errors.email && errors.email.message ? 'error' : 'primary'}
                    helper={errors.email?.message}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="password"
                control={control}
                render={({ field: { ref, onChange } }) => (
                  <PasswordField
                    ref={ref}
                    onChange={onChange}
                    placeholder="Password"
                    passwordToggle={true}
                    variant={errors.password && errors.password.message ? 'error' : 'primary'}
                    helper={errors.password?.message}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                name="gender"
                control={control}
                defaultValue={genders[0].type}
                render={({ field: { onChange } }) => (
                  <Select
                    data={genders}
                    listDef={listDef}
                    onSelect={(item) => onChange(item.type)}
                    className="w-full"
                  />
                )}
              />
            </div>
          </div>

          <div className="flex items-center justify-start mt-5">
            <Button type="submit" className="w-fulls">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
