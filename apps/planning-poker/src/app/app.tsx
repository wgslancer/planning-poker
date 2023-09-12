import { Button, UiProvider } from 'ui';

export function App() {
  return (
    <UiProvider>
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </UiProvider>
  );
}

export default App;
