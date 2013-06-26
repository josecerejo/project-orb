jQuery(document).ready(function () {
    jQuery('#staff-select button').click(function () {
        jQuery(this).attr("disabled", "disabled").removeClass("btn-inverse").addClass("btn-danger")
    })

    jQuery("#persona-select button").click(function () {

        jQuery("#staff-select button").each(function () {
            jQuery(this).removeAttr("disabled").removeClass("btn-danger").addClass("btn-inverse")
        });
    })

    jQuery("#persona-select button").click(function () {
        jQuery(".x-surface").first().remove();
    })
    jQuery("table").each(function () {
        jQuery(this).removeClass("sq-backend-section-table").addClass("table");
    })

    jQuery("table label").each(function () {

        if (jQuery(this).text() == "Use default") {
            jQuery(this).remove()
        }
    })
    if (jQuery('table input[type=checkbox]').attr('checked', true)) {
        jQuery('table input[type=checkbox]').click();
        jQuery('table input[type=checkbox]').hide();
    }

    jQuery('.create-asset-name input').blur(function () {
        jQuery(".create-location").val(jQuery(this).val())
    })

    jQuery('select').change(function () {
        if (jQuery(this).val() === "N/A") {
            jQuery(this).parent().parent().next("tr").toggle();
        } else {
            jQuery(this).parent().parent().next("tr").show();

        }
    })

    if (window.location.href.indexOf("search_category") != -1) {
        jQuery('a[href="#serach-objective"]').tab('show');
    }
    jQuery(".employee-suggest").typeahead({
        source: staffNames
    })

    jQuery("#persona-select .btn-small").click(function () {
        jQuery(".selected-staff").text("")
        jQuery(".selected-persona").text(jQuery(this).text())
    })

    jQuery("#staff-select .btn-small").click(function () {
        jQuery(".selected-staff").text("vs." + jQuery(this).text())
    })


});