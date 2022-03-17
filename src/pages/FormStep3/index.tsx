import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert('Please enter your email and github account!');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 3/3</p>
                <h1>Cool {state.name}, where do we find you?</h1>
                <p>Fill in your contacts in the fields below</p>

                <hr />

                <label>
                    What is your e-mail?
                    <input
                        type="text"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    What is your GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className='backButton'>Back</Link>
                <button onClick={handleNextStep}>Finish</button>
            </C.Container>
        </Theme>
    );
}