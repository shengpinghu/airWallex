import { shallowMount, mount } from '@vue/test-utils'
import sendEmail from '@/components/send-email/index.vue'
import Home from '@/views/home/index.vue'

describe('Home-click', () => {
  it('dialogFormVisible is true after button-click', () => {
    const wrapper = mount(Home)
    const createScheme = wrapper.findAll('.register').at(0)
    createScheme.trigger('click')
    const sendEmailWrapper = shallowMount(sendEmail, {
      propsData: { dialogFormVisible: wrapper.vm.dialogFormVisible }
    })
    expect(sendEmailWrapper.vm.dialogFormVisible).toBeTruthy()
  })

  it('send is clicked by correct email', done => {
    const wrapper = shallowMount(sendEmail)
    const HomeWrapper = shallowMount(Home)
    wrapper.setData({
      sendForm: {
        name: '123',
        email: '123@123.com',
        confirm_email: '123@123.com'
      }
    })
    wrapper.find('.send-button').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.dialogFormVisible).toBeFalsy()
      done()
    })
  })

})

