<template>
    <div class="feedback-form-wrapper">
        <div class="feedback-form-description">
            <p>Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply
                within 24 hrs!</p>
            <p>If contact forms aren’t your thing... send me an email at ilyasharafeev01@gmail.com</p>
        </div>
        <div class="feedback-form-inputs">
            <div class="feedback-form-inputs__name">
                <MazInput
                        v-model="firstNameInput"
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
                <MazBtn color="black" class="min-w-[150px]" @click="logTemp" :disabled="disabledButton">Send</MazBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import MazInput from 'maz-ui/components/MazInput'
import MazTextarea from 'maz-ui/components/MazTextarea'
import MazBtn from 'maz-ui/components/MazBtn'

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

//form
const logTemp = () => {
    const form = reactive({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    })
    console.log(form);
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
.feedback-form-wrapper {
  display: flex;
  gap: 126px;

  .feedback-form-description {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 40px;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    color: var(--color);
  }

  .feedback-form-inputs {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 30px;

    .feedback-form-inputs__name {
      display: flex;
      gap: 30px;
    }

    .feedback-form-inputs__email {

    }
  }
}
</style>
