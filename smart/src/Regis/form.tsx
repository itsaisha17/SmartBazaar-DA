import { useMemo, useState } from 'react'
import { BackgroundBeamsWithCollision } from '../Components/Background/collide'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

type CountryOption = {
  label: string;
  value: string;
};

type FormState = {
  email: string;
  phone: string;
  address: string;
  select: string | null;
  name: string;
};

export const Form = () => {  
  const [user, setUser] = useState<FormState>({
    email: '',
    phone: '',
    address: '',
    select: null,
    name: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption: CountryOption | null) => {
    setUser({
      ...user,
      select: selectedOption?.value ?? null,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.phone || !user.address || !user.select) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('http://localhost:6200/Orton/Reg', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const resData = await response.json();
      if (response.ok) {
        toast.success("Registration successful", {
          onClose: () => navigate('/Add')
        });
      } else {
        toast.error(resData.extraDetail ? resData.extraDetail : resData.message ?? 'Something went wrong.');
      }
    } catch (error) {
      toast.error('Backend is unavailable. Please start the API server and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const options = useMemo(() => countryList().getData() as CountryOption[], [])

  return (
    <div className='min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-6xl flex-col-reverse overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-950/30 lg:grid lg:grid-cols-[1.05fr_0.95fr]'>
        <div className="relative min-h-[280px] bg-slate-950">
          <BackgroundBeamsWithCollision className='flex h-full min-h-[280px] flex-col justify-center px-8 py-10 sm:px-12'>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Welcome aboard</p>
            <p className="mt-4 text-4xl font-bold text-white sm:text-5xl">Join Smart Bazaar</p>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
              Create your profile to unlock faster checkout, product updates, and a smoother shopping journey.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur">
                <p className="text-2xl font-semibold">2 min</p>
                <p className="mt-1 text-sm text-slate-300">Fast registration flow</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Access to your shopping account</p>
              </div>
            </div>
          </BackgroundBeamsWithCollision>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center bg-white px-6 py-10 sm:px-10 lg:px-12'>
          <div className='mb-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-violet-600'>Create account</p>
            <h1 className='mt-3 text-4xl font-semibold tracking-tight text-slate-900'>Register Form</h1>
            <p className='mt-3 text-sm leading-6 text-slate-500'>
              Enter your details to personalize your shopping and continue into the storefront.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <input
              type='text'
              name='name'
              value={user.name}
              onChange={handleChange}
              className='h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white'
              placeholder='Full name'
            />
            <input
              type='email'
              name='email'
              value={user.email}
              onChange={handleChange}
              className='h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white'
              placeholder='Email address'
            />
            <input
              type='tel'
              name='phone'
              value={user.phone}
              onChange={handleChange}
              className='h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white'
              placeholder='Phone number'
            />
            <div className='text-start'>
              <Select
                value={options.find(option => option.value === user.select) ?? null}
                onChange={handleSelectChange}
                className='text-start'
                options={options}
                placeholder='Select country'
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: '48px',
                    borderRadius: '1rem',
                    borderColor: '#e2e8f0',
                    backgroundColor: '#f8fafc',
                    boxShadow: 'none',
                    paddingLeft: '0.25rem',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? '#f1f5f9' : '#ffffff',
                    color: '#0f172a',
                  }),
                }}
              />
            </div>
          </div>

          <input
            type='text'
            name='address'
            value={user.address}
            onChange={handleChange}
            className='mt-4 h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white'
            placeholder='Address'
          />

          <button
            disabled={isSubmitting}
            className='mt-8 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70'
          >
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>

          <p className='mt-4 text-sm leading-6 text-slate-500'>
            This form uses the existing backend route at `http://localhost:6200/Orton/Reg`.
          </p>
        </form>
      </div>
    </div>
  )
}
