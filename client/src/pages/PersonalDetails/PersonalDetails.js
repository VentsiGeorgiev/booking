import { DisplayNameForm, PhoneNumberForm, UserImageForm, UserNameForm } from '../../components/PersonalDetailsShared';

function PersonalDetails() {

    return (
        <section>
            <UserImageForm />
            <UserNameForm />
            <DisplayNameForm />
            <PhoneNumberForm />
        </section >
    );
}

export default PersonalDetails;