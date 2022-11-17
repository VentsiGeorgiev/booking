import { DisplayNameForm, UserImageForm, UserNameForm } from '../../components/PersonalDetailsShared';

function PersonalDetails() {

    return (
        <section>
            <UserImageForm />
            <UserNameForm />
            <DisplayNameForm />
        </section >
    );
}

export default PersonalDetails;