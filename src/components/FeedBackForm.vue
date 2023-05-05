<template>
    <div class="feedback-form-wrapper">
        <div class="feedback-form-description" data-aos="fade-up"
             data-aos-anchor-placement="center-bottom">
            <p>Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply
                within 24 hrs!</p>
            <p>If contact forms aren’t your thing... send me an email at ilyasharafeev01@gmail.com</p>
        </div>
        <div class="feedback-form-inputs" data-aos="fade-up"
             data-aos-anchor-placement="center-bottom">
            <div class="feedback-form-inputs__name">
                <MazInput
                    v-model="firstNameInput"
                    class="feedback-form-inputs__name-first-name"
                    id="name"
                    name="name"
                    placeholder="first name"
                    :label="'name:  ' + firstNameInput"
                    :required="true"
                    @input="checkInputs"
                        :error="firstNameInput.length <= 0 && activeCheck"
                />
                <MazInput
                        v-model="lastNameInput"
                        class="feedback-form-inputs__name-last-name"
                        placeholder="last name"
                        :label="'last name:  ' + lastNameInput"
                />
            </div>
            <div class="feedback-form-inputs__email">
                <MazInput
                        v-model="emailInput"
                        id="email"
                        name="email"
                        placeholder="email"
                        :required="true"
                        @input="checkInputs"
                        :label="emailErrorText"
                        :error="emailError"
                />
            </div>
            <div>
                <MazTextarea
                        v-model="messageInput"
                        id="comment"
                        label="message:"
                />
            </div>
            <div>
                <MazBtn color="black" class="min-w-[150px] z-[2] h-[45px]" @click="sendEmail" :disabled="disabledButton">
                    <span v-if="!stateSpinner">Send</span>
                    <MazSpinner v-if="stateSpinner" size="25px" color="primary" class=""/>
                </MazBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import MazInput from 'maz-ui/components/MazInput'
import MazTextarea from 'maz-ui/components/MazTextarea'
import MazBtn from 'maz-ui/components/MazBtn'
import MazSpinner from "maz-ui/components/MazSpinner";
import axios from "axios";

// inputs values
const firstNameInput = ref("");
const lastNameInput = ref("");
const emailInput = ref("");
const messageInput = ref("");

// error || states
const emailError = ref(false);
const emailErrorText = ref("");
const disabledButton = ref(true);
const activeCheck = ref(false);

//state spinner
const stateSpinner = ref(false);

//form
const sendEmail = async () => {
    console.log("spinner started")
    stateSpinner.value = true;
    const form = reactive({
        "firstName": firstNameInput.value,
        "lastName": lastNameInput.value,
        "email": emailInput.value,
        "message": messageInput.value,
    })
    await axios.post('https://my-portfolio-backend-dusky.vercel.app', form)
        .then(function (response) {
            // success
            if(response.status === 204) {
                firstNameInput.value = "";
                lastNameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
                activeCheck.value = false;
                disabledButton.value = true;

                localStorage.setItem("sentMessage", "true");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log("spinner end")
    stateSpinner.value = false;
}

const checkInputs = () => {
    activeCheck.value = true;
    if (firstNameInput.value && emailInput.value) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
            disabledButton.value = false;
            emailError.value = false;
            emailErrorText.value = `email:  ${emailInput.value}`;
            return;
        } else {
            emailError.value = true;
            emailErrorText.value = "Invalid email"
            return;
        }
    }

    disabledButton.value = true;
}
</script>

<style scoped lang="scss">
@import "../styles/media-mixins";

.feedback-form-wrapper {
    display: flex;
    gap: 126px;
    flex-direction: row;

    @include mobile-lg {
        flex-direction: column;
    }


    .feedback-form-description {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 40px;
        font-weight: 400;
        font-size: 30px;
        line-height: 34px;
        color: var(--color);

        @include mobile-lg {
            font-size: 24px;
            line-height: 47px;
        }

  }

  .feedback-form-inputs {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 30px;

    .feedback-form-inputs__name {
      display: flex;
      gap: 30px;

        .feedback-form-inputs__name-first-name {
            @include mobile-lg {
                display: flex;
                flex: 1;
            }
        }

        .feedback-form-inputs__name-last-name {
            @include mobile-lg {
                display: flex;
                flex: 1;
            }
        }
    }

    .feedback-form-inputs__email {

    }
  }
}
</style>
