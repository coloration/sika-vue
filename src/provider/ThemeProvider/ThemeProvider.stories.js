import ThemeProvider from './ThemeProvider.vue';
import { themeBreathConfig, themeHackConfig, ThemeType } from './type'
import Box from '../../components/Box/Box.vue'
import Bar from '../../charts/Bar/Bar.vue'
export default {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    theme: { 
      control: { 
        type: 'inline-radio', 
        options: [ThemeType.default, ThemeType.breath, ThemeType.hack] 
      } 
    },
    config: {
      control: {
        type: 'object'
      }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ThemeProvider, Box, Bar },
  template: `
    <ThemeProvider v-bind="$props">
      <Box 
        title="国民经济行业分类"
        :width="500">
        <template slot="title-content">我是标题右侧内容</template>
        
        <div style="height: 200px; padding-top: 0px;">
          <p style="font-size: 0.6em; opacity: 0.8; text-align: right; margin: 0; padding: 10px 0 20px;">数据截止为2020.07.31</p>
          <Bar 
            :value="[400, 700, 1000, 600, 200, 1200, 1000]" 
            :category="['制造1', '制造2', '制造3', '制造4', '制造5', '制造6', '制造7']"
          />
        </div>
      </Box>
    </ThemeProvider>
  `,
});

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: ThemeType.hack,
  // config: themeHackConfig
}

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
