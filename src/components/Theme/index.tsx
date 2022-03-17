import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title='Personal'
                            description='Tell about yourself'
                            icon='profile'
                            path='/'
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title='Professional'
                            description='Your level'
                            icon='book'
                            path='/step2'
                            active={state.currentStep === 2}

                        />

                        <SidebarItem
                            title='Contacts'
                            description='How to find you'
                            icon='mail'
                            path='/step3'
                            active={state.currentStep === 3}

                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}