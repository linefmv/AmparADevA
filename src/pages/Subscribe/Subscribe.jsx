import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer"
import {Formik, Field, ErrorMessage} from 'formik';
import schema from "../../schema";

import {
    Content, Description, Fields, Form, Questions, Text, Title, TitleInsideForms,
} from './styles';

const Subscribe = () => {
    return (<>
            <Menu/>
            <Content>
                <Description className="description">
                    <Title>AmparA DevA</Title>
                    <Text>Esse projeto tem o intuíto de conectar mulher com mais experiência na área da tecnologia para
                        auxiliar nas dúvidas sobre carreira, portifólio, stacks, conhecer empresas, pair programming,
                        resolução de exercícios e aplicações em vagas. Basta você se inscrever e iremos entrar em
                        contato
                        com você! O AmparAs é para todas, para ti que tem um tempinho e quer ajudar e para você que
                        precisa
                        de ajuda!</Text>
                </Description>
                <Formik
                    initialValues={{fullName: '', email: '', phone: '',}}
                    validateSchema={schema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <Fields>
                                <TitleInsideForms>Inscreva-se</TitleInsideForms>
                                <label>Nome</label>
                                <Field type="name" name="fullName" placeholder="Nome completo"/>
                                <ErrorMessage name="name"/>
                                <label>Email</label>
                                <Field type="email" name="email" placeholder="Email"/>
                                <ErrorMessage name="email"/>
                                <label>Telefone</label>
                                <Field type="phone" name="phone" placeholder="Telefone"/>
                            </Fields>
                            <Questions>
                                <TitleInsideForms>A proposta do AmparA ficou clara para você?</TitleInsideForms>
                                <label>
                                    <Field type="radio" name="picked" value="sim"/>
                                    Sim
                                </label>
                                <label>
                                    <Field type="radio" name="picked" value="nao"/>
                                    Não
                                </label>
                                <TitleInsideForms>Sua inscrição é para?</TitleInsideForms>
                                <label>
                                    <Field type="radio" name="picked" value="mentora"/>
                                    Mentora
                                </label>
                                <label>
                                    <Field type="radio" name="picked" value="mentorada"/>
                                    Mentorada
                                </label>
                            </Questions>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>)}
                </Formik>
            </Content>
            <Footer/>
        </>);
};

export default Subscribe;
