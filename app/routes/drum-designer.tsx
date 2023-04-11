import Container from '~/components/Container';

export default function DrumDesigner() {
  return (
    <Container>
      <main className='mt-24 text-neutral-50 '>
        <section className=' flex h-full min-h-screen w-full flex-col  items-center justify-between p-4 text-center md:p-0 '>
          <div>
            <h1 className='text-3xl font-medium md:text-6xl '>
              Choose your audio engine
            </h1>
          </div>
        </section>
      </main>
    </Container>
  );
}
