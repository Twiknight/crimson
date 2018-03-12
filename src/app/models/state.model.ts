import { Decimal } from "decimal.js";

import { FormItem } from "./formItem.model";

export interface State {
    desc: string;
    items: FormItem[];
    rate: Decimal;
}

export class Character implements State {
    public attack: FormItem =
        new FormItem('attack', 'attack', 1)
    public skill: FormItem =
        new FormItem('skill', 'skill rate(%)', 100)

    get desc(): string {
        return "Character attack and skill rate"
    }

    get items(): FormItem[] {
        return [this.attack, this.skill]
    }

    get rate(): Decimal {
        const atk = this.attack.value;
        const skill = this.skill.value.div(100)
        return atk.times(skill);
    }
}

export class PhysicalEhance implements State {
    public physical_boost: FormItem =
        new FormItem('physical_boost', 'physical damage boost(%)', 0)
    public physical_debuff: FormItem =
        new FormItem('physical_debuff', 'target physical debff(%)', 0)
    public common_boost: FormItem =
        new FormItem('common_boost', 'common damage boost(%)', 0)
    public common_debuff: FormItem =
        new FormItem('common_debuff', 'target common debuff(%)', 0)
    public crit: FormItem =
        new FormItem('crit', 'critical rate(%)', 0)
    public crit_extra: FormItem =
        new FormItem('crit_extra', 'extra critical damage (%)', 0)

    get desc(): string {
        return "Damange enhancement works with Physical"
    }

    public get items(): FormItem[] {
        return [
            this.physical_boost,
            this.physical_debuff,
            this.common_boost,
            this.common_debuff,
            this.crit,
            this.crit_extra
        ]
    }

    public get rate(): Decimal {
        const one = new Decimal(1)
        const pb = this.physical_boost.value.div(100).add(1)
        const pd = this.physical_debuff.value.div(100).add(1)
        const cb = this.common_boost.value.div(100).add(1)
        const cd = this.common_debuff.value.div(100).add(1)
        const crit = this.crit.value.div(100)
        const cdmg = this.crit_extra.value.div(100).add(1)

        // crit related enhancement rate
        const crit_up = one.plus((cdmg.times(crit)))
        // physical dmg enhancement rate
        const phy_up = one.times(pb).times(pd)
        // common dmg enhancement rate
        const com_up = one.times(cb).times(cd)
        return crit_up.times(phy_up).times(com_up)
    }
}