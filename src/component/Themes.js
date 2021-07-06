
import { Button, ButtonGroup } from 'rsuite'

export default function AppThemes({ themes, callback }) {
    return (
      
        <ButtonGroup>
        {themes.map((b) => (
          <Button color='primary' key={b} onClick={() => callback(b)}>
            {b}
          </Button>
        ))}
        </ButtonGroup>
      
    );
  }