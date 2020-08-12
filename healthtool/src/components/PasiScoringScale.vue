<template>
  <div class="b-table">
    <div class="table-wrapper">
      <table class="table is-bordered is-narrow">
        <thead class="has-background-primary-light">
          <th>{{$t('pasi.label_pasi_score')}}</th>
          <th>{{$t('pasi.pasi_table_desc')}}</th>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 5</td>
            <td class="has-text-success">{{$t('pasi.lvl_mild')}}</td>
          </tr>
          <tr>
            <td>5 - 10</td>
            <td class="has-text-warning">{{$t('pasi.lvl_moderate')}}</td>
          </tr>
          <tr>
            <td>&gt; 10</td>
            <td class="has-text-danger">{{$t('pasi.lvl_severe')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
