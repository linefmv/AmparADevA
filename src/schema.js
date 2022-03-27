import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string('Nome').min(2).required(),
    email: Yup.string('Email').email().required(),
})
