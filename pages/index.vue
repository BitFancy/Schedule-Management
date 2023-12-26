<template>
    <div>
        <ui-tabs :tabs="['email', 'notifications', 'sms']" />
        <ui-price class="mt-16" style="width: 350px" />

        <ul class="mt-16 ul" style="padding: auto">
            <li>
                Management
                <ul>
                    <li>
                        Manage domains
                        <ul>
                            <li>company environment? (dev, staging, prod...)</li>
                            <li>view dns records + verified or not</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                Stats
                <ul>
                    <li>Send mails count</li>
                    <li>Delivered count & percentage</li>
                    <li>failed count & percentage</li>
                    <li>suppresed count & percentage</li>
                    <li>sending count graph</li>
                    <li>plan usage overview x/x & %?</li>
                    <li>filter by domain & date</li>
                    <li>filter by tags</li>
                    <li>filter by receipient mail domains</li>
                    <li>view logs table</li>
                    <li>by template</li>
                    <li>unique opens</li>
                    <li>unique clicks</li>
                </ul>
            </li>


            <li>
                Contacts
                <ul>
                    <li>Growth graph</li>
                    <li>Unsubscribes graph</li>
                </ul>
            </li>

            <li>
                Templates
                <ul>
                    <li>automate journeys</li>
                    <li>a/b testing</li>
                    <li>template purpose (transactional, marketing, other.. to filter user preferences)</li>
                    <li>subject</li>
                    <li>multi lang support</li>
                    <li>multi version support</li>
                    <li>auto git sync</li>
                    <li>html editor</li>
                    <li>visual editor</li>
                    <li>activity by link</li>
                    <li>subscribers activity (unsubscribes list / opened list / clicks list with individual counts)</li>
                    <li>layouts</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style>

    body ul.ul, body ul.ul ul {
        padding: revert;
        list-style: circle;
    }

</style>