<template>
    <footer class="footer">
        <div class="container">
        <div class="columns">
            <div class="column is-8">
                <p>{{$t('footer.label_copyright')}} 2020 MyHealthDriver.Com.</p>
                <p>{{$t('footer.label_rights_reserved')}}. EnerFlex {{$t('footer.label_is_registered_trademark')}}</p>
                <p>{{$t('footer.label_developed_by')}}</p>
                <div class="is-vcentered">
                    <img src="https://myhealthdriver.com/images/halal_cert.png" width="64" alt="HALAL Certified">

                    <img src="https://myhealthdriver.com/images/iso_9001_ukas.jpg" width="64" alt="ISO 9001 UKAS certified">

                    <img src="https://myhealthdriver.com/images/iso_22000_ukas.jpg" width="64" alt="ISO 9001 UKAS certified">
                    <img src="https://myhealthdriver.com/images/logo.png" alt="MyHealthDriver Logo">
                    </div>
            </div>
            <div class="column is-4">
                <sub>{{$t('footer.label_disclaimer')}}</sub>
            </div>
        </div>
        </div>
    </footer>
</template>
<style>
footer img{
    vertical-align: middle;
    margin: .5rem .5rem 0 0;
}
</style>
