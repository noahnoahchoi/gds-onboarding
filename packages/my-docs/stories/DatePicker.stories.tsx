import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import DatePicker from '../../my-components/src/DatePicker';
import Button from '../../my-components/src/Button';
import { type DatePickerDate } from '../../my-components/src/DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'DatePicker',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [date, setDate] = useState<DatePickerDate>(null);

        return (
            <div style={{ width: '500px', height: '1000vh' }}>
                <DatePicker
                    date={date}
                    onChangeDate={(date) => setDate(date)}
                    locale="ko"
                >
                    <DatePicker.Trigger>
                        <DatePicker.Input
                            asTrigger
                            placeholder="시작일"
                            value={date?.toLocaleString('ja')}
                        />
                    </DatePicker.Trigger>
                    <DatePicker.Content
                        side="top"
                        sideOffset={10}
                        align="start"
                    >
                        <DatePicker.Header>
                            <DatePicker.Input placeholder="시작일" />
                            {/* <DatePicker.Input target="from" /> */}
                            {/* <DatePicker.Input target="to" /> */}
                        </DatePicker.Header>
                        <DatePicker.Calendar
                            minDate={new Date('2024-07.05')}
                            maxDate={new Date('2024-07.24')}
                        />
                        <DatePicker.Footer>
                            <DatePicker.Reset />

                            <Button variant="link">A</Button>
                            <Button variant="primary">B</Button>
                        </DatePicker.Footer>
                    </DatePicker.Content>
                </DatePicker>

                <div>바깥 상태: {date?.toString()}</div>
            </div>
        );
    },
};
