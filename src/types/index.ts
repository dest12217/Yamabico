import Vue, { VueConstructor } from 'vue'
import { Store } from 'vuex'
import { RootState } from '@/store/types'

abstract class VueInitializeClass extends Vue {
    public $store!: Store<RootState>;
}

export const VueInitialize = Vue as VueConstructor<VueInitializeClass>

export interface FormInput {
  value: string;
  error: boolean;
}

export interface CallData {
  formData: { [key: string]: FormInput };
  phrase: string;
  copyLoading: boolean;
}

export type ServicesItem = {
  name: string;
  key: string;
  type: 'a0' | 'a@' | 'aA0' | 'a0@' | 'aA0@';
  icon?: string[];
}
