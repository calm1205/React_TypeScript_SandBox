import { ThemeProvider } from 'src/Theme';
import { Radio } from 'src/components/atoms';

const App = () => {
  return (
    <ThemeProvider>
      <p>Learn React</p>
      <Radio isActive />
    </ThemeProvider>
  );
};

export default App;
