import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert('Please enter your name!');
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 2/3</p>
                <h1>{state.name}, what best describes you?</h1>
                <p>Choose the option that best matches your current status, professionally</p>

                <hr />

                <SelectOption
                    title="I'm a beginner"
                    description='I started programming less than 2 years ago'
                    icon='🥳'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="I'm a programmer"
                    description='I have been programming for 2 years or more'
                    icon='😎'
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/' className='backButton'>Back</Link>
                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    );
}