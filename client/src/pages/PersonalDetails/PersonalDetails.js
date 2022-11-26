import {
    DateOfBirthForm,
    DisplayNameForm,
    GenderForm,
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
            <GenderForm />
        </section >
    );
}

export default PersonalDetails;