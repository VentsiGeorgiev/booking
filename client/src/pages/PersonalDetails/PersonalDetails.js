import {
    DateOfBirthForm,
    DisplayNameForm,
    NationalityForm,
    PhoneNumberForm,
    UserImageForm,
    UserNameForm
} from '../../components/PersonalDetailsShared';

function PersonalDetails() {

    return (
        <section>
            <UserImageForm />
            <UserNameForm />
            <DisplayNameForm />
            <PhoneNumberForm />
            <DateOfBirthForm />
            <NationalityForm />
        </section >
    );
}

export default PersonalDetails;