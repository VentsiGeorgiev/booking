import { DateOfBirthForm, DisplayNameForm, PhoneNumberForm, UserImageForm, UserNameForm } from '../../components/PersonalDetailsShared';

function PersonalDetails() {

    return (
        <section>
            <UserImageForm />
            <UserNameForm />
            <DisplayNameForm />
            <PhoneNumberForm />
            <DateOfBirthForm />
        </section >
    );
}

export default PersonalDetails;