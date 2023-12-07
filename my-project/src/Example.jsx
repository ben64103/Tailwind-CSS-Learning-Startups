import React from 'react';

const Example = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col items-center justify-between mx-5 rounded-md overflow-hidden bg-white ring-2 ring-gray-800/10 mt-7'>
        <div className='p-5 pt-10'>
          <img
            className='w-16 h-16'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='logo'
          />
          <div className='mt-10 pt-3'>
            <div className='hidden sm:flex my-12'>
              <a
                href='#'
                className='p-1 px-3 font-medium text-sm text-gray-600/90 ring-1 rounded-full ring-slate-400/40'>
                Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                <span className='font-bold text-indigo-600'>
                  Read more &rarr;
                </span>
              </a>
            </div>
            <div className='mt-3 sm:mt-0'>
              <h1 className='text-4xl sm:text-6xl font-bold text-black/80'>
                Data to enrich your online business.
              </h1>
              <p className='text-lg mt-4 text-gray-700'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>

              <section className='mt-6 flex items-center gap-3'>
                <a className='bg-indigo-600 text-white px-3.5 py-2.5 rounded-md'>
                  Get started
                </a>
                <a className='px-3.5 py-2.5 rounded-md hover:bg-black/10'>
                  Learn more
                  <span>&rarr;</span>
                </a>
              </section>
            </div>
          </div>
        </div>

       <div className='h-96 sm:h-[600px] flex items-center overflow-hidden'>
       <img
          className='w-full bg-cover bg-center mt-10'
          src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80'
          alt=''
        />
       </div>
      </div>
    
    </>
  );
};

export default Example;
