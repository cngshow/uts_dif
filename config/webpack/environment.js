const { environment } = require('@rails/webpacker');

// This is a temporary workaround for generating manifest.json on Windows. The problem is already fixed in //
// webpack-manifest-plugin 2.0.0-rc.1. Remove this piece of code when @rails/webpacker incorporates the new version
// of webpack-manifest-plugin.
const config = require('@rails/webpacker/package/config');
const ManifestPlugin = require('webpack-manifest-plugin');
environment.plugins.append('Manifest', new ManifestPlugin({
    publicPath: config.publicPath,
    writeToFileEmit: true,
    filter: f => {
        f.name = f.name.replace(/\\/g, '/');
        f.path = f.path.replace(/\\/g, '/');
        return f
    }
}));

module.exports = environment;
