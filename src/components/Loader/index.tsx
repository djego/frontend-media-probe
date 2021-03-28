import { Box } from '@chakra-ui/layout';
import './index.css';

const Loader: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" width="100%" py="1.2rem">
            <div className="lds-ripple">
                <div />
                <div />
            </div>
        </Box>
    )
}

export default Loader;